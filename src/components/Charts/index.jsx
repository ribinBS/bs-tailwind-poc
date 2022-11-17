import React from "react";
import ReactEcharts from "echarts-for-react";

const getOptions = () => {
    return {
        baseOption: {
            color: ["#9e9b9c"],
            xAxis: [
                { data: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
                {
                    type: "category",
                },
            ],
            yAxis: [
                {
                    axisLabel: {
                        textStyle: {
                            fontSize: 10,
                            fontWeight: 400,
                            color: "#DBD6E1",
                        },
                    },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    type: "value",
                },
            ],
            series: [
                {
                    data: [
                        0, 0.5, 1, 1.25, 1.75, 1.5, 1.75, 1.25, 1.75, 1.5, 2, 1,
                        1.5, 2, 1, 2, 1.5, 1, 2, 1, 2, 1.5, 1, 1, 1.5, 2, 1, 1,
                        1.5, 1, 1, 1.5, 1, 1.25, 1.5,
                    ],
                    type: "bar",
                },
            ],
        },
    };
};

const Charts = () => {
    return (
        <ReactEcharts
            option={getOptions()}
            style={{
                height: "36px",
                width: "200px",
            }}
            opts={{ renderer: "svg" }}
        />
    );
};

export default Charts;
