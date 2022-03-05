import { useEffect, useRef } from 'react';
import { War } from "@atlasacademy/api-connector";

interface CanvasProps {
    width: number;
    height: number;
    spots: War.Spot[];
    roads: War.SpotRoad[];
    mapId: number;
}

const Canvas = ({ width, height, spots, roads, mapId }: CanvasProps) => {

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');

        if (context) {
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            roads.forEach(road => {
                const start = spots.find(spot => spot.id === road.srcSpotId && spot.mapId === mapId);
                const end = spots.find(spot => spot.id === road.dstSpotId && spot.mapId === mapId);

                if (start && end) {
                    context.beginPath();
                    context.moveTo(start.x, start.y);
                    context.strokeStyle = '#eb8e1c';
                    context.lineWidth = 5;
                    context.lineTo(end.x, end.y);
                    context.stroke();
                }
            })
        }
    }, [height, width, roads, spots, mapId]);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    return <canvas style={{
        position: 'absolute',
        top: 0,
        zoom: 0.578,
    }} ref={canvasRef} height={height} width={width} />;
};


export default Canvas;
