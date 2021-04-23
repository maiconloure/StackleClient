import React from 'react';
import { useForm } from "react-hook-form";
import { ModalContainer, Title, ModalForm, ModalBtn, Input } from './style';

interface IModal {
    title: string;
    fields: IField[];
    onFinish: (data: any) => void;
    exit: () => void;
}

interface IField {
    type: string;
    name: string;
    placeholder?: string;
}

export const FormModal = ({title, fields, onFinish, exit }: IModal) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <ModalContainer>
            <Title>{title}</Title>
            <ModalForm onSubmit={handleSubmit(onFinish)}>
                {fields.map(((field, index) => (
                    <React.Fragment key={index}>
                        <Input id={field.name} type={field.type} name={field.name} placeholder={field.placeholder} ref={register({ required: true })}/>
                        <p  id="error">{errors.name && <span role="alert">{errors.name.message}</span>}</p>
                    </React.Fragment>
                )))}
            <ModalBtn>Salvar</ModalBtn>
            </ModalForm> 
            <p onClick={exit}>Sair</p>
        </ModalContainer>
    )
}