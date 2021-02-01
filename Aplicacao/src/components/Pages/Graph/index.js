import React from 'react';
import { Chart } from 'react-google-charts'

export default function Graph() {
    return (
        <div>
            <Chart
                width={'100%'}
                height={'500px'}
                chartType="LineChart"
                loader={<div>Carregando</div>}
                data={
                    [
                        ['x', 'Cachorro'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]
                }
                options={{
                    hAxis:{
                        title:'Tempo'
                    },
                    vAxis:{
                        title:'Popularidade'
                    },
                }}
                rootProps={{'data-testid' : '1'}}
            />
        </div>
    )
}