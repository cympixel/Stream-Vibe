import getIdFromTitle from '@/utils/getIdFromTitle'

const getTabsElementsIdsFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tabpanel`,
  }
}

export default getTabsElementsIdsFromTitle
