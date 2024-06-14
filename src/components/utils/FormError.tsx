export default function FormError({ error }: { error: string | undefined }) {
    return error ? <p className="text-sm text-red-500">{error}</p> : <></>;
}
