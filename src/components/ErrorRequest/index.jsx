import style from './ErrorRequest.module.scss';

const ErrorRequest = () => {
  return (
    <div className={style.root}>
      <h2>Упс... 😕</h2>
      <p>Кажется что-то не так и мы не смогли получить пиццы...</p>
    </div>
  );
};

export default ErrorRequest;
