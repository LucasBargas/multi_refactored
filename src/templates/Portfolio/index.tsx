import React from 'react';
import * as S from './styles';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { PortfolioArea } from './PortfolioArea';
import { Loading } from '../../components/Loading';

interface Props<T> {
  id: T;
}

const navList: string[] = ['all', 'app', 'card', 'web'];

export const Portfolio = ({ id }: Props<string>): JSX.Element => {
  const [value, setValue] = React.useState<string>('all');
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleDisableLoading = (): void => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleClick = (item: string): void => {
    setLoading(true);
    setValue(item);
    handleDisableLoading();
  };

  React.useEffect(() => {
    handleDisableLoading();
  }, []);

  return (
    <section id={id}>
      <Container defaultPadding>
        <Title subTitle="Portfolio" title="Check Our Portfolio" />

        <S.PortfolioNav>
          <ul>
            {navList.map((item) => (
              <li key={item} className={item === value ? 'active' : ''}>
                <button
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </S.PortfolioNav>

        {loading ? <Loading home={false} /> : <PortfolioArea value={value} />}
      </Container>
    </section>
  );
};
