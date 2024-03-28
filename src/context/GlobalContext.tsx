import React, { ReactNode } from 'react';
import { IGame } from '../interfaces/Interfaces';

interface GameContextType {
  games: IGame[] | null;
  setGames: (games: IGame[]) => void | null;
  error: string | null;
  input: string | undefined;
  setInput: (input: string) => void | string | null;
  setError: (error: string) => void | string | unknown;
}

export const GlobalContext = React.createContext<GameContextType>({
  games: null,
  setGames: (games: IGame[]) => { },
  error: null,
  input: undefined,
  setInput: (input: string) => '',
  setError: (error: unknown) => '',
});



type Props = {
  children: ReactNode;
};

export const GlobalStorage: React.FC<Props> = ({ children }) => {
  const [games, setGames] = React.useState<IGame[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [input, setInput] = React.useState('');

  const fetchData = async (): Promise<void> => {
    try {
      // Simulando os dados retornados pela API
      const gamesData = [
        {
          idGame: 1,
          nameGame: "Spider-Man",
          price: 29.90,
          description: "Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.",
          linkImage: "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
          platforms: [
            {
              idPlatform: 3,
              namePlatform: "PS4"
            }
          ],
          stores: [
            {
              adress: "Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030",
              quantity: 17,
              nameStore: "Smart Games Tamboré",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862263!2d-46.83692552467153!3d-23.504358278839028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1702222948150!5m2!1spt-BR!2sbr",
              idStore: 1
            },
            {
              adress: "Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000",
              quantity: 6,
              nameStore: "Smart Games Iguatemi",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.18942091972!2d-46.91675133927902!3d-23.50417424281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1702227142159!5m2!1spt-BR!2sbr",
              idStore: 2
            },
            {
              adress: "Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010",
              quantity: 3,
              nameStore: "Smart Games União",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7510909563857!2d-46.77127671360218!3d-23.541453306218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1702227305630!5m2!1spt-BR!2sbr",
              idStore: 3
            }
          ]
        },
        {
          idGame: 2,
          nameGame: "Spider-Man",
          price: 29.90,
          description: "Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.",
        
          linkImage: "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
          platforms: [
            {
              idPlatform: 3,
              namePlatform: "PS4"
            }
          ],
          stores: [
            {
              adress: "Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030",
              quantity: 17,
              nameStore: "Smart Games Tamboré",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862263!2d-46.83692552467153!3d-23.504358278839028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1702222948150!5m2!1spt-BR!2sbr",
              idStore: 1
            },
            {
              adress: "Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000",
              quantity: 6,
              nameStore: "Smart Games Iguatemi",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.18942091972!2d-46.91675133927902!3d-23.50417424281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1702227142159!5m2!1spt-BR!2sbr",
              idStore: 2
            },
            {
              adress: "Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010",
              quantity: 3,
              nameStore: "Smart Games União",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7510909563857!2d-46.77127671360218!3d-23.541453306218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1702227305630!5m2!1spt-BR!2sbr",
              idStore: 3
            }
          ]
        },
        {
          idGame: 3,
          nameGame: "Spider-Man",
          price: 29.90,
          description: "Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.",
          
          linkImage: "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
          platforms: [
            {
              idPlatform: 3,
              namePlatform: "PS4"
            },
            {
              idPlatform: 2,
              namePlatform: "PS5"
            }, {
              idPlatform: 1,
              namePlatform: "PS2"
            },
            {
              idPlatform: 4,
              namePlatform: "PC"
            },
          ],
          stores: [
            {
              adress: "Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030",
              quantity: 17,
              nameStore: "Smart Games Tamboré",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862263!2d-46.83692552467153!3d-23.504358278839028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1702222948150!5m2!1spt-BR!2sbr",
              idStore: 1
            },
            {
              adress: "Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000",
              quantity: 6,
              nameStore: "Smart Games Iguatemi",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.18942091972!2d-46.91675133927902!3d-23.50417424281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1702227142159!5m2!1spt-BR!2sbr",
              idStore: 2
            },
            {
              adress: "Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010",
              quantity: 3,
              nameStore: "Smart Games União",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7510909563857!2d-46.77127671360218!3d-23.541453306218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1702227305630!5m2!1spt-BR!2sbr",
              idStore: 3
            }
          ]
        },
        {
          idGame: 4,
          nameGame: "Spider-Man",
          price: 29.90,
          description: "Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.",
         
          linkImage: "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
          platforms: [
            {
              idPlatform: 3,
              namePlatform: "PS4"
            },
            {
              idPlatform: 2,
              namePlatform: "PS5"
            },
          ],
          stores: [
            {
              adress: "Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030",
              quantity: 17,
              nameStore: "Smart Games Tamboré",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862263!2d-46.83692552467153!3d-23.504358278839028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1702222948150!5m2!1spt-BR!2sbr",
              idStore: 1
            },
            {
              adress: "Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000",
              quantity: 6,
              nameStore: "Smart Games Iguatemi",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.18942091972!2d-46.91675133927902!3d-23.50417424281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1702227142159!5m2!1spt-BR!2sbr",
              idStore: 2
            },
            {
              adress: "Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010",
              quantity: 3,
              nameStore: "Smart Games União",
              linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7510909563857!2d-46.77127671360218!3d-23.541453306218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1702227305630!5m2!1spt-BR!2sbr",
              idStore: 3
            }
          ]
        },
        

      ];

      // Atualizando o estado com os dados formatados
      setGames(gamesData.map(game => ({
        idGame: game.idGame,
        nameGame: game.nameGame,
        linkImage: game.linkImage,
        price:game.price,
        platforms: game.platforms,
        description: game.description,
        stores: game.stores
      })));
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };


  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ games, setGames, error, input, setInput, setError }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
