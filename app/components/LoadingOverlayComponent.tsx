'use client'
import React from 'react'
import './css/loading.component.css'
import { useAppSelector } from '../store/hooks';

const LoadingOverlayComponent = () => {

    const isLoading = useAppSelector((state) => state.global.isLoading);

    return (
        <div className={`loading-overlay text-primary ${isLoading ? 'is-active' : ''}`}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingOverlayComponent