import { MainFooter, MainHeader } from "@/components";
import { ContactModal } from "@/components/contact-modal";


export default function About() {
    return (
        <>
            <MainHeader route={'Contact'} />
            <ContactModal/>
            <MainFooter />
        </>
    )
}