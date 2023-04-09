import React, { useEffect, useState } from 'react';
import { Account } from '../../duck/types';
import { useDispatch } from 'react-redux';
import { IComment } from '../../duck/types';
import NewComment from './newComment';
import ListComment from './listComment';

export default function Comment() {

    const [comment, setComment] = useState<[IComment] | undefined>(localStorage.getItem("comment") ? JSON.parse(localStorage.getItem("comment") || "") : null);


    return (
        <section id='comment' className='homepage'>
            <div className="section_title">
                <h1>
                    Học viên đã nói gì về <span>&lt;Cyber/&gt;</span>
                </h1>
            </div>
            <div className="section_content">
                <ListComment comment={comment}/>
                <NewComment comment={comment} setComment={setComment} />
            </div>
        </section>
    )
}
