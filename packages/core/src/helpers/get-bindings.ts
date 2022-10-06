import { MitosisNode, MitosisNodeBinding } from '../types/mitosis-node';

export function getBindingsCode(children: MitosisNode[]): string[] {
  let bindings: string[] = [];
  children.forEach((child) => {
    Object.keys(child.bindings || []).forEach((key) => {
      const binding = child.bindings[key];

      if (key === '_spread' && child.bindings._spread?.length) {
        bindings = [
          ...bindings,
          ...child.bindings._spread?.map((b: MitosisNodeBinding) => b?.code),
        ];
      } else {
        bindings.push(binding!.code);
      }
    });
    if (child.children) {
      bindings.push(...getBindingsCode(child.children));
    }
  });

  return bindings;
}
