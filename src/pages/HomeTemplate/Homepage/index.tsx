import React from 'react'
import Banner from './Banner';
import ListCourse from './ListCourse'
import ListTeacher from './ListTeacher';
import Comment from './comment';
import Loading from '../Loading';

export default function Homepage() {
  return (
    <div>
      <Banner/>
      <ListCourse />
      <ListTeacher />
      <Comment />
      {/* <Loading /> */}

    </div>
  )
}
