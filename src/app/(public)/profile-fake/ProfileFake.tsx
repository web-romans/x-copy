import { PageTitle } from "@/components/PageTitle"
import dynamic from "next/dynamic"

const DynamicProfileButton = dynamic(() =>
    import('./ProfileButton').then((mod) => mod.ProfileButton)
)

export function ProfileFake() {
    return (
        <div className="w-full max-w-xl">
            <PageTitle title='ProfileFake' />

            <DynamicProfileButton />
        </div>
    )
}
