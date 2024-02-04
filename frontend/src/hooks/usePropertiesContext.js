import { PropertiesContext } from "../context/PropertyContext";
import { useContext } from "react";

export const usePropertiesContext = () => {
    const context = useContext(PropertiesContext)

    return context
}