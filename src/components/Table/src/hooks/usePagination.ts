import type { PaginationProps } from '../types/pagination';
import type { BasicTableProps } from '../types/table';
import { computed, unref, ref, ComputedRef } from 'vue';

import { isBoolean } from '@/utils/is';
import { APISETTING, DEFAULTPAGESIZE, PAGESIZES } from '../const';

export function usePagination(refProps: ComputedRef<BasicTableProps>) {
  const configRef = ref<PaginationProps>({});
  const show = ref(true);

  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination } = unref(refProps);
    if (!unref(show) || (isBoolean(pagination) && !pagination)) {
      return false;
    }
    const { totalField } = APISETTING;
    const { countField } = APISETTING;
    return {
      pageSize: DEFAULTPAGESIZE,
      pageSizes: PAGESIZES,
      showSizePicker: true,
      showQuickJumper: true,
      prefix: () => {
        return `共${unref(configRef)[countField] || 0}条`;
      },
      ...(isBoolean(pagination) ? {} : pagination),
      ...unref(configRef),
      pageCount: unref(configRef)[totalField],
    };
  });

  function setPagination(info: Partial<PaginationProps>) {
    const paginationInfo = unref(getPaginationInfo);
    configRef.value = {
      ...(!isBoolean(paginationInfo) ? paginationInfo : {}),
      ...info,
    };
  }

  function getPagination() {
    return unref(getPaginationInfo);
  }

  function getShowPagination() {
    return unref(show);
  }

  async function setShowPagination(flag: boolean) {
    show.value = flag;
  }

  return { getPagination, getPaginationInfo, setShowPagination, getShowPagination, setPagination };
}
