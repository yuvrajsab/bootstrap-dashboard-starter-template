const sidebarSubmenuCollapseElementList = [].slice.call(document.querySelectorAll('#sidebar-menu li.nav-item ul.collapse'));
sidebarSubmenuCollapseElementList.map(function (collapseElement) {
	collapseElement.addEventListener('shown.bs.collapse', function () {
		const collapseLink = this.parentElement.querySelector('a[data-bs-toggle]');
		const lastItem = collapseLink.firstElementChild.lastElementChild;
		if (lastItem.tagName === "I")
			lastItem.classList.add("fa-rotate-270");
	});

	collapseElement.addEventListener('hidden.bs.collapse', function () {
		const collapseLink = this.parentElement.querySelector('a[data-bs-toggle]');
		const lastItem = collapseLink.firstElementChild.lastElementChild;
		if (lastItem.tagName === "I")
			lastItem.classList.remove("fa-rotate-270");
	});
});
