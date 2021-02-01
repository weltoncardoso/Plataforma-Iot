import React from 'react';
import { Chart, Row, Col } from 'react-google-charts'
import { Container } from 'react-bootstrap';

export default function Graph() {
    return (
        <Container fluid>
            <Chart style={{marginLeft:'20%'}}
                width={'500px'}
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
                    hAxis: {
                        title: 'Tempo'
                    },
                    vAxis: {
                        title: 'Popularidade'
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />


        </Container>
    )
}