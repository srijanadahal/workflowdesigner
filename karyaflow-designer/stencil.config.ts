import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'karyaflow-designer',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@karyaflow-designer/dist/types',
      directivesProxyFile: '../karyaflowtest/src/lib/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    })

  ],
  plugins: [
    sass()
  ]
};
