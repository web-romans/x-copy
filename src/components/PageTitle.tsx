interface Props {
    title: string
}

export function PageTitle({ title }: Props) {
    return <h1 className="mb-5 text-white font-bold text-2xl">{title}</h1>
}


