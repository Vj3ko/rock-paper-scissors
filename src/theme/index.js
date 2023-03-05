export const theme = {
  bg: 'radial-gradient(circle, hsl(214, 47%, 23%)  0%, hsl(237, 49%, 15%) 100%)',
  colors: {
    game: {
      scissors_1: 'rgb(236, 169, 34)',
      scissors_2: 'rgb(195, 133, 19)',
      paper_1: 'rgb(72, 101, 244)',
      paper_2: 'rgb(32, 66, 238)',
      rock_1: 'rgb(220, 46, 78) ',
      rock_2: 'rgb(172, 37, 62)',
      lizard_1: 'rgb(131, 79, 227)',
      lizard_2: 'rgb(95, 50, 179)',
      cyan_1: 'rgb(64, 185, 206)',
      cyan_2: 'rgb(47, 169, 190)',
      empty: 'rgb(25, 40, 69)',
    },
    text: {
      darkText: 'rgb(59, 67, 99)',
      scoreText: 'rgb(42, 70, 192)',
      headerOutline: 'rgb(96, 110, 133)',
      white: 'rgb(255, 255, 255)',
    },
  },
  border_radius: '5px',
  flexMixin: (justify, align) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};
