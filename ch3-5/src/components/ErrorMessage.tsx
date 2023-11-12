type Props = {
    error: any
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
    return (
        <div>
            <p>{error.toString()}</p>
        </div>
    )
}