export type Loadable<S> = ILoaded<S> | ILoading | IFailed | IReloading<S>

interface ILoaded<S> {
    status: "LOADED"
    data: S
}

interface ILoading {
    status: "LOADING"
}

interface IReloading<S> {
    status: "RELOADING"
    data: S
}

interface IFailed {
    status: "FAILED"
    error: Error | string | undefined | null
    message: string | undefined | null
}

export const Loading = <S>(): Loadable<S> => ({
    status: "LOADING",
})
export const Reloading = <S>(s: S): Loadable<S> => ({
    status: "RELOADING",
    data: s,
})
export const Loaded = <S>(s: S): Loadable<S> => ({
    status: "LOADED",
    data: s,
})
export const Failed = <S>(e: Error | string | undefined | null, message?: string | undefined | null): Loadable<S> => ({
    status: "FAILED",
    error: e,
    message,
})

type LoadableParam<S> = Loadable<S> | undefined | null

export const isLoaded = <S>(s: LoadableParam<S>): s is ILoaded<S> => s != null && s.status === "LOADED"
export const isLoading = <S>(s?: LoadableParam<S>): s is ILoading => s == null || s.status === "LOADING"
export const isReloading = <S>(s?: LoadableParam<S>): s is IReloading<S> =>
    s != null && s.status === "RELOADING"
export const isFailed = <S>(s: LoadableParam<S>): s is IFailed => s != null && s.status === "FAILED"
