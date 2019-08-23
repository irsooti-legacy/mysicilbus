import { useEffect, useReducer, useRef, useCallback } from 'react';

const initialState = {
    isLoading: false,
    errorMsg: '',
    data: {}
};

const FETCH_PENDING = 'FETCH_PENDING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

function isFetchPending(isLoading = false) {
    return { type: FETCH_PENDING, payload: { isLoading } };
}

function fetchError(errorMsg) {
    return {
        type: FETCH_ERROR,
        payload: { errorMsg }
    };
}

function fetchSuccess(data) {
    return { type: FETCH_SUCCESS, payload: { data } };
}

function reducer(state, { payload, type }) {
    switch (type) {
        case FETCH_PENDING:
            return { ...state, isLoading: payload.isLoading };
        case FETCH_SUCCESS:
            return {
                ...state,
                errorMsg: '',
                data: payload.data
            };

        case FETCH_ERROR:
            return { ...state, errorMsg: payload.errorMsg, data: {} };
        default:
            throw new Error();
    }
}

/**
 * @returns {[initialState, () => Promise<void>]}
 */
const usePromise = (initialData = {}) => {
    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        data: initialData
    });
    const shouldAbort = useRef(false);

    async function resolvePromise(api, query) {
        dispatch(isFetchPending(true));

        try {
            const data = await api(query);

            if (shouldAbort.current) return;
            dispatch(fetchSuccess(data));
        } catch (err) {
            if (shouldAbort.current) return;
            dispatch(fetchError(err.message));
        } finally {
            if (!shouldAbort.current) dispatch(isFetchPending(false));
        }
    }

    const executePromise = useCallback((api, query) => {
        resolvePromise(api, query);
    }, []);

    useEffect(() => {
        return () => (shouldAbort.current = true);
    }, []);

    return [state, executePromise];
};

export default usePromise;