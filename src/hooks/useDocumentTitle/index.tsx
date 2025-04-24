import { WEB_TITLE } from "@/constants";
import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = WEB_TITLE + " | " + title;

        return () => {
            document.title = WEB_TITLE;
        };
    }, [title]);
};

export default useDocumentTitle;