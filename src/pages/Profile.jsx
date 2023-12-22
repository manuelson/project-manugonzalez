import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function Profile() {

    const { userId } = useParams();

    // Check if the course is mine
    if (isNaN(userId)) {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="alert alert-danger" role="alert">
                            You are not allowed to see this content.
                        </div>
                    </div>
                </div>
            </>
        )
    }



    return (
        <>
           <span>User Id {userId}</span>
        </>
    )
}