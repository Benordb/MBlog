import { MainFooter, MainHeader } from "@/components";
import { MainNotFound } from "@/components/main-not-found";

export default function NotFound() {
    return (
        <div className="text-[#696A75] space-y-24">
            <MainHeader />
            <MainNotFound />
            <MainFooter />
        </div>
    );
}
