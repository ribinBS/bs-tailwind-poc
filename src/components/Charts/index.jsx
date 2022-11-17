import React from "react";
import ReactEcharts from "echarts-for-react";

const getOptions = () => {
    return {
        baseOption: {
            color: ["#9e9b9c"],
            xAxis: [
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
                        0, 1, 1.5, 2, 1, 1.5, 2, 1, 2, 1.5, 1, 2, 1, 2, 1.5, 1,
                        1, 1.5, 2, 1, 1, 1.5, 1, 1, 1.5, 1, 0,
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
