import React from 'react';
import { IComment, Account } from '../../../duck/types';
import avatar_1 from "../../../../../images/avatar_1.png";
import { useEffect, useRef } from 'react';

interface Props {
  comment: any,
}

function ListComment({ comment }: Props) {
  const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

  const bottomRef: any = useRef(null);
  useEffect(() => {
    bottomRef.current?.scroll({ top: bottomRef.current.scrollHeight, behavior: 'smooth' });
  }, [comment]);
  
  return (
    <div className='list_comment'
      ref={bottomRef}>
      {comment?.map((item: any, index: any) => {
        return <div className={account?.taiKhoan === item.taiKhoan ? `comment_item user_comment` : `comment_item`}
        >
          <div className="comment_img">
            <img src={avatar_1} alt="#" />
          </div>
          <div className='comment_info'>
            <h1>{item?.taiKhoan}</h1>
            <p>{item?.binhLuan}</p>
          </div>
        </div>
      })}
    </div>
  )
}
export default ListComment;