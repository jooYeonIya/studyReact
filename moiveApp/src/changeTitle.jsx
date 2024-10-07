import { useEffect } from "react"

export const changeTitle = (newTitle) => {
    useEffect(() => {
        const title = document.getElementsByTagName("title")[0]
        title.innerText = newTitle
    }, [newTitle] )
}
