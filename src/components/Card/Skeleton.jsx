import ContentLoader from 'react-content-loader';

import style from './Card.module.scss';

const Skeleton = () => {
	return (
		<ContentLoader
			className={style.card}
			speed={1.5}
			width={280}
			height={500}
			viewBox='0 0 280 500'
			backgroundColor='#f3f3f3'
			foregroundColor='#dedede'
		>
			<rect
				x='10'
				y='10'
				rx='10'
				ry='10'
				width='260'
				height='260'
			/>
			<rect
				x='0'
				y='288'
				rx='5'
				ry='5'
				width='280'
				height='24'
			/>
			<rect
				x='0'
				y='332'
				rx='0'
				ry='0'
				width='280'
				height='85'
			/>
			<rect
				x='0'
				y='432'
				rx='5'
				ry='5'
				width='89'
				height='27'
			/>
			<rect
				x='126'
				y='432'
				rx='5'
				ry='5'
				width='155'
				height='40'
			/>
		</ContentLoader>
	);
};

export default Skeleton;
