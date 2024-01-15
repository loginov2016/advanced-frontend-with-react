import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    // Если не используем тайпскрипт - нужен babel-loader
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
                {
                    loader: 'ts-loader',
                }
            ]
    };

    const cssLoaderWithModules = {
        test: /\.s[ac]ss?$/i,
        use: [
                //Добавляем в место 'style-loader
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        },
                    }
                },
                'sass-loader',
            ],
      };

    return [tsLoader, cssLoaderWithModules];
}