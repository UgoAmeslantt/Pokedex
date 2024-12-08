import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
    yAxis: [
        {
            label: 'Statistiques',
            domain: [150, 150], // Définit le domaine de l'axe Y pour qu'il soit toujours 150


        },
    ],
    series: [{ dataKey: 'value', label: 'Statistiques' }],
    height: 300,
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};

export default function PokemonDetailCardStat({ stats }) {
    const chartData = stats.map(stat => ({
        month: stat.stat.name,
        value: stat.base_stat,
    }));

    return (
        <div style={{ width: '99%' }}>
            <BarChart
                dataset={chartData}
                xAxis={[
                    { scaleType: 'band', dataKey: 'month', tickPlacement: 'start', tickLabelPlacement: 'middle' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}
