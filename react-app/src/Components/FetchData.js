import { React, useEffect } from "react";

export default function FetchData() {
    const fetchData = async (url) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((error) => console.error("Unable to get items.", error));
    };

    useEffect(() => {
        fetchData("http://localhost:3000/user/12");
    });
    return <div></div>;
}
