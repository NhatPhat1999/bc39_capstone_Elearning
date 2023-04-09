export interface State<t> {
    loading: boolean;
    data: t | null;
    error: any;
};

export interface Action {
    type: string;
    payload: any;
};

export interface IUserLogin {
    taiKhoan: string | null;
    matKhau: string | null;
};

export interface IUserRegister {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    soDT: string;
    maNhom: string;
    email: string;
}

export interface ICategory {
    maDanhMuc: string;
    tenDanhMuc: string;
}


export interface ICourse {
    maKhoaHoc: string;
    tenKhoaHoc: string;
    biDanh: string;
    moTa: string;
    luotXem: number;
    hinhAnh: string;
    ngayTao: string;
    danhGia: number;
}

export interface IUserInfo<Course> {
    chiTietKhoaHocGhiDanh: Course[]|[]|undefined;
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    soDT: string;
    maLoaiNguoiDung: string;
    maNhom: string;
    email: string;
}

export interface Account extends IUserInfo<ICourse> {
    accessToken: string,
};

export interface IDetailCourse extends ICourse {
    maNhom: string;
    soLuongHocVien: number;
    nguoiTao: {
        taiKhoan: string;
        hoTen: string;
        maLoaiNguoiDung: string;
        tenLoaiNguoiDung: string;
    };
    danhMucKhoaHoc: {
        maDanhMucKhoahoc: string;
        tenDanhMucKhoaHoc: string;
    }
}

export interface IComment {
    taiKhoan: string | undefined;
    binhLuan: string | undefined;
}

