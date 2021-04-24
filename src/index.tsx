import React from 'react';

/**
 * Component's props with ref.
 */
export type TForwardedRefCompProps<TCompProps = unknown, TComp = unknown> = React.PropsWithoutRef<TCompProps> & {
  forwardedRef: React.Ref<TComp>;
};

/**
 * HOC for forward ref into child component.
 *
 * @param Comp Child component without ref.
 * @returns Child component with ref.
 */
export default function withForwardedRef<TCompProps = unknown, TComp = unknown>(Comp: React.ComponentType<TCompProps>) {
  const name = Comp.displayName || Comp.name;

  const WrappedComp = React.forwardRef<TComp, TCompProps>((props, ref) => <Comp {...props} forwardedRef={ref} />);

  WrappedComp.displayName = `withForwardedRef(${name})`;

  return WrappedComp;
}
