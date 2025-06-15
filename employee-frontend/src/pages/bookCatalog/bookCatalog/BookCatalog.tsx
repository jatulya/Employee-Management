import NewButton from "../../../components/button/NewButton";

export default function BookCatalog () {
    return (<>
        <NewButton type="button" variant ={{ color : "primary", size : 'lg'}}>
            Back to Home
        </NewButton>
        <NewButton type="button" variant={{ color : 'secondary', size : 'md'}}>
            Back to Home
        </NewButton>
        <NewButton type="button" variant={{ color : "ternary", size : 'sm'}}>
            Back to Home
        </NewButton>
    </>
        
    )
}