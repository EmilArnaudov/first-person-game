import { __component__Props } from './__component__(kebabCase).types';
import cl from 'classnames';

const __component__Component = (props: __component__Props): JSX.Element => {
  const { className, style } = props;

  return (
    <div className={cl(className)} style={style}>
      __component__ Component
    </div>
  );
};

const __component__ = __component__Component;
export { __component__ };
