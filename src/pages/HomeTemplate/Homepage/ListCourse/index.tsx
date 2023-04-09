import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { IDetailCourse, ICategory } from '../../duck/types';
import { CourseItem } from './CourseItem/CourseItem';
import { actListCategory } from './duck/duckCategory/action';
import { actCategoryCourse } from './duck/duckCategoryCourse/action';
import { actListCourse } from './duck/duckListCourse/action';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ListCourse() {
  const [selectCategory, setSelectCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isHomepage, setIsHomegage] = useState("");
  const [activeCategory, setActiveCategory] = useState("")

  const { pathname } = useLocation();

  const listCategory = useSelector((state: RootState) => state.listCategoryReducer.data);

  let listCourse = useSelector((state: RootState) => selectCategory === "" ? state.listCourseReducer.data : state.categoryCourseReducer.data);

  const dispatch: Function = useDispatch();
  useEffect(() => {
    dispatch(actListCategory());
    if (selectCategory === "") {
      dispatch(actListCourse());
    } else {
      dispatch(actCategoryCourse(selectCategory))
    }
    ;
  }, [selectCategory]);

  useEffect(() => {
    pathname === "/" ? setIsHomegage("homepage") : setIsHomegage("")
  }, [pathname])
  const handleCategory = (maDanhMuc: string) => {
    selectCategory === maDanhMuc ? setSelectCategory("") : setSelectCategory(maDanhMuc);
  };

  const handleOnchange = (event: any) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  const data = keyword === "" ? listCourse : listCourse?.filter(item => {
    return item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  return (
    <section id='list_course' className={`section ${isHomepage}`}>
      <div className='section_title'>
        {isHomepage === "" ? <h1>
          Danh sách khóa học
        </h1> : <Link to={"danhsachkhoahoc"}>Khóa học phổ biến tại <span>&lt;Cyber/&gt;</span></Link>}
      </div>
      <div className='section_content'>
        <div className={`tab ${activeCategory}`}>
          <div className="tab_content" >
            <button className='btn-light-1' onClick={() => { setActiveCategory("") }}>
              <span><i className="fa-solid fa-x"></i></span>
            </button>
            <div className='tab_list'>
              <p>Danh mục:</p>
              {listCategory?.map((category: ICategory) => {
                return <button
                  onClick={() => { handleCategory(category.maDanhMuc); setActiveCategory("") }}
                  className={selectCategory === category.maDanhMuc ? `btn-light-2 ${category.maDanhMuc} active` : `btn-light-2 ${category.maDanhMuc}`}><span>{category.tenDanhMuc}</span></button>
              })}
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='search'>
            <button className='btn-light-1' onClick={() => { setActiveCategory("active") }}>
              <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <input className='input_1' onChange={handleOnchange} placeholder='tìm kiếm' />
          </div>
          <div className='course'>
            <div className='course_content'>
              {
                data?.map((Course: IDetailCourse) => {
                  return <CourseItem Course={Course} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
