'use client'
import { UUID } from 'crypto';
import React from 'react'

export interface ModalData {
    uuid: UUID;
    name: string;
}

type Props = {
    data: ModalData;
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void
    handleAction: (value: UUID) => void
}

const ModalComponent = (props: Props) => {

    const handleIsActive = () => props.setIsModalActive(false);

    return (
        <>
            <div className={`modal fade ${props.isModalActive ? 'show d-block' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Alerta de eliminación</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Deseas eliminar el proveedor?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleIsActive}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => props.handleAction(props.data.uuid)} >Ok</button>
                        </div>
                    </div>
                </div>
            </div>
            {props.isModalActive && <div className="modal-backdrop fade show"></div>}
        </>
    )
}

export default ModalComponent