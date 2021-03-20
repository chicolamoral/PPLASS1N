export type State<S, A> = (initialState: S) => [S, A];

const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> => {
    return (x: S) => {
        const [s, a] = state(x)
        const newStateFunc: State<S, B> = f(a)
        return newStateFunc(s)
    }
}