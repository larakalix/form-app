import { useState } from "react";
import { FormProps } from "../interfaces/interfaces";
import { FormControl } from "./FormControl";
import { Label } from "./Label";

export const Board = () => {
    const [content, setContent] = useState<FormProps>({} as FormProps);

    const handleForm = (e: any) => {
        setContent({
            ...content,
            [e.target.name]: [e.target.value],
        });
    };

    const handleClick = (e: any) => {
        const { name, from, to, price } = content;
        const win = window.open(
            `https://wa.me/${process.env.NEXT_APP_PHONE}?text=%20Nombre:%20${name}%20|%20Origen:%20${from}%20|%20Destino:%20${to}%20|%20Precio:%20C$${price}`,
            "_blank"
        )!;
        win.focus();
    };

    return (
        <div className="border border-gray-100 rounded-md py-8 px-4 min-w-[90vw] md:min-w-[500px]">
            <h1 className="mb-4 text-center font-bold">Consultas</h1>

            <form>
                <FormControl>
                    <Label name="name" label="Nombre" />
                    <input
                        type="text"
                        name="name"
                        onChange={handleForm}
                        className="border border-gray-100 rounded-md min-h-[3rem] px-[0.8rem]"
                    />
                </FormControl>
                <FormControl>
                    <Label name="from" label="Direccion de origen" />
                    <textarea
                        name="from"
                        onChange={handleForm}
                        className="border border-gray-100 rounded-md min-h-[3rem] px-[0.8rem] resize-none h-32 pt-3"
                    />
                </FormControl>
                <FormControl>
                    <Label name="to" label="Direccion de destino" />
                    <textarea
                        name="to"
                        onChange={handleForm}
                        className="border border-gray-100 rounded-md min-h-[3rem] px-[0.8rem] resize-none h-32 pt-3"
                    />
                </FormControl>
                <FormControl>
                    <Label name="price" label="Precio disponible" />
                    <input
                        type="text"
                        name="price"
                        onChange={handleForm}
                        className="border border-gray-100 rounded-md min-h-[3rem] px-[0.8rem]"
                    />
                </FormControl>

                <button
                    onClick={handleClick}
                    className="bg-blue-600 text-white uppercase w-full flex items-center justify-center py-4 rounded-md font-bold tracking-normal hover:tracking-wider transition-all"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
