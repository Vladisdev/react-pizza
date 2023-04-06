import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSortOrder, setSortType } from '../../redux/slices/filterSlice';
import style from './Sort.module.scss';

const sortList = [
	{ name: 'популярности', sortProperty: 'rating' },
	{ name: 'цене', sortProperty: 'price' },
	{ name: 'алфавиту', sortProperty: 'title' },
];

const Sort = () => {
	const dispatch = useDispatch();

	const { activeSort, orderSort } = useSelector(state => state.filter);

	const [isPopupOpened, setIsPopupOpened] = useState(false);

	return (
		<div
			onClick={() => setIsPopupOpened(!isPopupOpened)}
			className={style.sort}
		>
			<div className={style.sort__label}>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span>{activeSort.name}</span>
			</div>
			{isPopupOpened && (
				<div className={style.sort__popup}>
					<ul>
						{sortList.map(item => (
							<li
								key={item.name}
								className={activeSort.name === item.name ? style.active : null}
								onClick={() =>
									dispatch(
										setSortType({
											name: item.name,
											sortProperty: item.sortProperty,
										})
									)
								}
							>
								{item.name}
							</li>
						))}
					</ul>
					<ul>
						<li
							className={orderSort === 'asc' ? style.active : null}
							onClick={() => dispatch(setSortOrder('asc'))}
						>
							↑
						</li>
						<li
							className={orderSort === 'desc' ? style.active : null}
							onClick={() => dispatch(setSortOrder('desc'))}
						>
							↓
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sort;
