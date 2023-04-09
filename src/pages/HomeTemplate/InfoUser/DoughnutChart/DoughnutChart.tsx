import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ICourse, IDetailCourse } from '../../duck/types';
import { DoughnutData } from './DoughnutData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    RCourse: ICourse[] | [] | undefined,
}
export default function DoughnutChart({ RCourse }: Props) {
    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 15
                    }
                }
            }
        }
    };
    const data = {
        labels: DoughnutData(RCourse).label,
        datasets: [
            {
                label: "khóa học đã đăng kí",
                data: DoughnutData(RCourse).data,
                
                backgroundColor: [
                    "#eb53ff",
                    "#4ad9b0",
                    "#a1e355",
                    "#3abaff",
                    "#a03aff",
                    "#ffca3a",
                ],
                borderWidth: 5,
                borderRadius: 2,
                hoverBorderWidth: 0,
            },
        ],
    };
    return <Doughnut data={data} options={options}/>;
}
