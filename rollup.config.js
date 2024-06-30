import alias from '@rollup/plugin-alias';

export default {
  plugins: [
    alias({
      entries: [
        { find: 'src', replacement: './src' },
        { find: 'components', replacement: './src/components' },
      ],
    }),
  ],
};
