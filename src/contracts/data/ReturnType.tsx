export default interface DataReturn<T> {
    loading: boolean;
    error: boolean;
    data: T;
}
