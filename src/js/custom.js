// Feather icons
feather.replace();

const sidebarSubmenuCollapseElementList = [].slice.call(document.querySelectorAll('#sidebar-menu li.nav-item ul.collapse'));
sidebarSubmenuCollapseElementList.map(function (collapseElement) {
	collapseElement.addEventListener('shown.bs.collapse', function () {
		const collapseLink = this.parentElement.querySelector('a[data-bs-toggle]');
		const lastItem = collapseLink.firstElementChild.lastElementChild;
		if (lastItem.tagName === "svg")
			lastItem.outerHTML = feather.icons['chevron-down'].toSvg({ class: 'm-0' });
	});

	collapseElement.addEventListener('hidden.bs.collapse', function () {
		const collapseLink = this.parentElement.querySelector('a[data-bs-toggle]');
		const lastItem = collapseLink.firstElementChild.lastElementChild;
		if (lastItem.tagName === "svg")
			lastItem.outerHTML = feather.icons['chevron-left'].toSvg({ class: 'm-0' });
	});
});
