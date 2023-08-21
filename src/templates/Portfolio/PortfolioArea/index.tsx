import * as S from './styles';
import { products, type IProduct } from '../../../utils/products';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';

interface Props {
  value: string;
}

export const PortfolioArea = ({ value }: Props): JSX.Element => {
  const productsList = products.filter((product: IProduct) => {
    return products.some(() => product.categories.includes(value));
  });

  return (
    <S.PortfolioAreaContainer>
      {productsList.map((item) => (
        <S.PortfolioCard key={item.title}>
          <figure>
            <img src={item.src} alt={item.title} />
          </figure>

          <div>
            <h3>
              {item.title.replace('-', ' ')}{' '}
              <span>{item.title.slice(0, 4).replace('-', '')}</span>
            </h3>

            <ul>
              <li>
                <i>
                  <AiOutlinePlus />
                </i>
              </li>
              <li>
                <i>
                  <BiLink />
                </i>
              </li>
            </ul>
          </div>
        </S.PortfolioCard>
      ))}
    </S.PortfolioAreaContainer>
  );
};
