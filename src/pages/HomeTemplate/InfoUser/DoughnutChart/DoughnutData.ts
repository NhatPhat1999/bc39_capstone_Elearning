import { ICourse,IDetailCourse } from "../../duck/types"

export const DoughnutData = (RCourse: ICourse[]|[] | undefined)=>{
    const listCourse: IDetailCourse[] | null = localStorage.getItem("listCourse") ? JSON.parse(localStorage.getItem("listCourse") || "") : null;
    
    const RDetailCourse = listCourse?.filter((Course:IDetailCourse)=>{
        return RCourse?.findIndex((item: ICourse) => item.maKhoaHoc === Course.maKhoaHoc) != -1;
    }) ;
    
    let label=RDetailCourse?.map((item,index)=>item.danhMucKhoaHoc.maDanhMucKhoahoc);
    
    label = label?.filter((item, index)=>{
        return label?.indexOf(item) === index;
    })

    const data =label?.map((item)=>{
        return  RDetailCourse?.filter((Course)=>
            Course.danhMucKhoaHoc.maDanhMucKhoahoc===item
        ).length
    })
    
    return {label:label,data:data}
}