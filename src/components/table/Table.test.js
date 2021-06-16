import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './Table';

test('Deve ter o state inicial como string vazia.', () => {
	const table = shallow(
		<Component/>
	);

	expect(table.state().info).toBe('');
});

test('Deve ter 4 colunas no thead da tabela de usuários.', () => {
	const props = {
		type: 'users',
		data: [{
			"avatar_url" : "https://avatars3.githubusercontent.com/u/127790?v=3",
			"events_url" : "https://api.github.com/users/dscho/events{/privacy}",
			"followers_url" : "https://api.github.com/users/dscho/followers",
			"following_url" : "https://api.github.com/users/dscho/following{/other_user}",
			"gists_url" : "https://api.github.com/users/dscho/gists{/gist_id}",
			"gravatar_id" : "",
			"html_url" : "https://github.com/dscho",
			"id" : 127790,
			"login" : "dscho",
			"organizations_url" : "https://api.github.com/users/dscho/orgs",
			"received_events_url" : "https://api.github.com/users/dscho/received_events",
			"repos_url" : "https://api.github.com/users/dscho/repos",
			"score" : 15.500255,
			"site_admin" : false,
			"starred_url" : "https://api.github.com/users/dscho/starred{/owner}{/repo}",
			"subscriptions_url" : "https://api.github.com/users/dscho/subscriptions",
			"type" : "User",
			"url" : "https://api.github.com/users/dscho"
		}]
	};

	const table = shallow(
		<Component type={props.type} data={props.data} />
	);

	expect(table.find('thead th').length).toBe(4);
});

test('Deve ter 4 colunas no thead da tabela de repositories.', () => {
	const props = {
		type: 'repositories',
		data: [{
			"archive_url" : "https://api.github.com/repos/polygonal/ds/{archive_format}{/ref}",
			"assignees_url" : "https://api.github.com/repos/polygonal/ds/assignees{/user}",
			"blobs_url" : "https://api.github.com/repos/polygonal/ds/git/blobs{/sha}",
			"branches_url" : "https://api.github.com/repos/polygonal/ds/branches{/branch}",
			"clone_url" : "https://github.com/polygonal/ds.git",
			"collaborators_url" : "https://api.github.com/repos/polygonal/ds/collaborators{/collaborator}",
			"comments_url" : "https://api.github.com/repos/polygonal/ds/comments{/number}",
			"commits_url" : "https://api.github.com/repos/polygonal/ds/commits{/sha}",
			"compare_url" : "https://api.github.com/repos/polygonal/ds/compare/{base}...{head}",
			"contents_url" : "https://api.github.com/repos/polygonal/ds/contents/{+path}",
			"contributors_url" : "https://api.github.com/repos/polygonal/ds/contributors",
			"created_at" : "2012-06-16T15:46:24Z",
			"default_branch" : "master",
			"deployments_url" : "https://api.github.com/repos/polygonal/ds/deployments",
			"description" : "A Haxe library containing data structures for games.",
			"downloads_url" : "https://api.github.com/repos/polygonal/ds/downloads",
			"events_url" : "https://api.github.com/repos/polygonal/ds/events",
			"fork" : false,
			"forks" : 50,
			"forks_count" : 50,
			"forks_url" : "https://api.github.com/repos/polygonal/ds/forks",
			"full_name" : "polygonal/ds",
			"git_commits_url" : "https://api.github.com/repos/polygonal/ds/git/commits{/sha}",
			"git_refs_url" : "https://api.github.com/repos/polygonal/ds/git/refs{/sha}",
			"git_tags_url" : "https://api.github.com/repos/polygonal/ds/git/tags{/sha}",
			"git_url" : "git://github.com/polygonal/ds.git",
			"has_downloads" : true,
			"has_issues" : true,
			"has_pages" : true,
			"has_projects" : true,
			"has_wiki" : true,
			"homepage" : "",
			"hooks_url" : "https://api.github.com/repos/polygonal/ds/hooks",
			"html_url" : "https://github.com/polygonal/ds",
			"id" : 4685589,
			"issue_comment_url" : "https://api.github.com/repos/polygonal/ds/issues/comments{/number}",
			"issue_events_url" : "https://api.github.com/repos/polygonal/ds/issues/events{/number}",
			"issues_url" : "https://api.github.com/repos/polygonal/ds/issues{/number}",
			"keys_url" : "https://api.github.com/repos/polygonal/ds/keys{/key_id}",
			"labels_url" : "https://api.github.com/repos/polygonal/ds/labels{/name}",
			"language" : "Haxe",
			"languages_url" : "https://api.github.com/repos/polygonal/ds/languages",
			"merges_url" : "https://api.github.com/repos/polygonal/ds/merges",
			"milestones_url" : "https://api.github.com/repos/polygonal/ds/milestones{/number}",
			"mirror_url" : null,
			"name" : "ds",
			"notifications_url" : "https://api.github.com/repos/polygonal/ds/notifications{?since,all,participating}",
			"open_issues" : 2,
			"open_issues_count" : 2,
			"owner" : {
				"avatar_url" : "https://avatars1.githubusercontent.com/u/724365?v=3",
				"events_url" : "https://api.github.com/users/polygonal/events{/privacy}",
				"followers_url" : "https://api.github.com/users/polygonal/followers",
				"following_url" : "https://api.github.com/users/polygonal/following{/other_user}",
				"gists_url" : "https://api.github.com/users/polygonal/gists{/gist_id}",
				"gravatar_id" : "",
				"html_url" : "https://github.com/polygonal",
				"id" : 724365,
				"login" : "polygonal",
				"organizations_url" : "https://api.github.com/users/polygonal/orgs",
				"received_events_url" : "https://api.github.com/users/polygonal/received_events",
				"repos_url" : "https://api.github.com/users/polygonal/repos",
				"site_admin" : false,
				"starred_url" : "https://api.github.com/users/polygonal/starred{/owner}{/repo}",
				"subscriptions_url" : "https://api.github.com/users/polygonal/subscriptions",
				"type" : "User",
				"url" : "https://api.github.com/users/polygonal"
			},
			"private" : false,
			"pulls_url" : "https://api.github.com/repos/polygonal/ds/pulls{/number}",
			"pushed_at" : "2017-02-22T23:11:24Z",
			"releases_url" : "https://api.github.com/repos/polygonal/ds/releases{/id}",
			"score" : 78.50573,
			"size" : 8852,
			"ssh_url" : "git@github.com:polygonal/ds.git",
			"stargazers_count" : 252,
			"stargazers_url" : "https://api.github.com/repos/polygonal/ds/stargazers",
			"statuses_url" : "https://api.github.com/repos/polygonal/ds/statuses/{sha}",
			"subscribers_url" : "https://api.github.com/repos/polygonal/ds/subscribers",
			"subscription_url" : "https://api.github.com/repos/polygonal/ds/subscription",
			"svn_url" : "https://github.com/polygonal/ds",
			"tags_url" : "https://api.github.com/repos/polygonal/ds/tags",
			"teams_url" : "https://api.github.com/repos/polygonal/ds/teams",
			"trees_url" : "https://api.github.com/repos/polygonal/ds/git/trees{/sha}",
			"updated_at" : "2017-05-31T04:32:01Z",
			"url" : "https://api.github.com/repos/polygonal/ds",
			"watchers" : 252 ,
			"watchers_count" : 252
		}]
	};

	const table = shallow(
		<Component type={props.type} data={props.data} />
	);

	expect(table.find('thead th').length).toBe(5);
});

test('A tabela de users deve ter as props setadas corretamente.', () => {
	const userProps = {
		type: 'users',
		data: [{
			"avatar_url" : "https://avatars3.githubusercontent.com/u/127790?v=3",
			"events_url" : "https://api.github.com/users/dscho/events{/privacy}",
			"followers_url" : "https://api.github.com/users/dscho/followers",
			"following_url" : "https://api.github.com/users/dscho/following{/other_user}",
			"gists_url" : "https://api.github.com/users/dscho/gists{/gist_id}",
			"gravatar_id" : "",
			"html_url" : "https://github.com/dscho",
			"id" : 127790,
			"login" : "dscho",
			"organizations_url" : "https://api.github.com/users/dscho/orgs",
			"received_events_url" : "https://api.github.com/users/dscho/received_events",
			"repos_url" : "https://api.github.com/users/dscho/repos",
			"score" : 15.500255,
			"site_admin" : false,
			"starred_url" : "https://api.github.com/users/dscho/starred{/owner}{/repo}",
			"subscriptions_url" : "https://api.github.com/users/dscho/subscriptions",
			"type" : "User",
			"url" : "https://api.github.com/users/dscho"
		}]
	};

	const userTable = shallow(
		<Component type={userProps.type} data={userProps.data} />
	);

	expect(userTable.instance().props.type).toBe(userProps.type);
	expect(userTable.instance().props.data).toBe(userProps.data);
});

test('A tabela de repositories deve ter as props setadas corretamente.', () => {
	const repoProps = {
		type: 'repositories',
		data: [{
			"archive_url" : "https://api.github.com/repos/polygonal/ds/{archive_format}{/ref}",
			"assignees_url" : "https://api.github.com/repos/polygonal/ds/assignees{/user}",
			"blobs_url" : "https://api.github.com/repos/polygonal/ds/git/blobs{/sha}",
			"branches_url" : "https://api.github.com/repos/polygonal/ds/branches{/branch}",
			"clone_url" : "https://github.com/polygonal/ds.git",
			"collaborators_url" : "https://api.github.com/repos/polygonal/ds/collaborators{/collaborator}",
			"comments_url" : "https://api.github.com/repos/polygonal/ds/comments{/number}",
			"commits_url" : "https://api.github.com/repos/polygonal/ds/commits{/sha}",
			"compare_url" : "https://api.github.com/repos/polygonal/ds/compare/{base}...{head}",
			"contents_url" : "https://api.github.com/repos/polygonal/ds/contents/{+path}",
			"contributors_url" : "https://api.github.com/repos/polygonal/ds/contributors",
			"created_at" : "2012-06-16T15:46:24Z",
			"default_branch" : "master",
			"deployments_url" : "https://api.github.com/repos/polygonal/ds/deployments",
			"description" : "A Haxe library containing data structures for games.",
			"downloads_url" : "https://api.github.com/repos/polygonal/ds/downloads",
			"events_url" : "https://api.github.com/repos/polygonal/ds/events",
			"fork" : false,
			"forks" : 50,
			"forks_count" : 50,
			"forks_url" : "https://api.github.com/repos/polygonal/ds/forks",
			"full_name" : "polygonal/ds",
			"git_commits_url" : "https://api.github.com/repos/polygonal/ds/git/commits{/sha}",
			"git_refs_url" : "https://api.github.com/repos/polygonal/ds/git/refs{/sha}",
			"git_tags_url" : "https://api.github.com/repos/polygonal/ds/git/tags{/sha}",
			"git_url" : "git://github.com/polygonal/ds.git",
			"has_downloads" : true,
			"has_issues" : true,
			"has_pages" : true,
			"has_projects" : true,
			"has_wiki" : true,
			"homepage" : "",
			"hooks_url" : "https://api.github.com/repos/polygonal/ds/hooks",
			"html_url" : "https://github.com/polygonal/ds",
			"id" : 4685589,
			"issue_comment_url" : "https://api.github.com/repos/polygonal/ds/issues/comments{/number}",
			"issue_events_url" : "https://api.github.com/repos/polygonal/ds/issues/events{/number}",
			"issues_url" : "https://api.github.com/repos/polygonal/ds/issues{/number}",
			"keys_url" : "https://api.github.com/repos/polygonal/ds/keys{/key_id}",
			"labels_url" : "https://api.github.com/repos/polygonal/ds/labels{/name}",
			"language" : "Haxe",
			"languages_url" : "https://api.github.com/repos/polygonal/ds/languages",
			"merges_url" : "https://api.github.com/repos/polygonal/ds/merges",
			"milestones_url" : "https://api.github.com/repos/polygonal/ds/milestones{/number}",
			"mirror_url" : null,
			"name" : "ds",
			"notifications_url" : "https://api.github.com/repos/polygonal/ds/notifications{?since,all,participating}",
			"open_issues" : 2,
			"open_issues_count" : 2,
			"owner" : {
				"avatar_url" : "https://avatars1.githubusercontent.com/u/724365?v=3",
				"events_url" : "https://api.github.com/users/polygonal/events{/privacy}",
				"followers_url" : "https://api.github.com/users/polygonal/followers",
				"following_url" : "https://api.github.com/users/polygonal/following{/other_user}",
				"gists_url" : "https://api.github.com/users/polygonal/gists{/gist_id}",
				"gravatar_id" : "",
				"html_url" : "https://github.com/polygonal",
				"id" : 724365,
				"login" : "polygonal",
				"organizations_url" : "https://api.github.com/users/polygonal/orgs",
				"received_events_url" : "https://api.github.com/users/polygonal/received_events",
				"repos_url" : "https://api.github.com/users/polygonal/repos",
				"site_admin" : false,
				"starred_url" : "https://api.github.com/users/polygonal/starred{/owner}{/repo}",
				"subscriptions_url" : "https://api.github.com/users/polygonal/subscriptions",
				"type" : "User",
				"url" : "https://api.github.com/users/polygonal"
			},
			"private" : false,
			"pulls_url" : "https://api.github.com/repos/polygonal/ds/pulls{/number}",
			"pushed_at" : "2017-02-22T23:11:24Z",
			"releases_url" : "https://api.github.com/repos/polygonal/ds/releases{/id}",
			"score" : 78.50573,
			"size" : 8852,
			"ssh_url" : "git@github.com:polygonal/ds.git",
			"stargazers_count" : 252,
			"stargazers_url" : "https://api.github.com/repos/polygonal/ds/stargazers",
			"statuses_url" : "https://api.github.com/repos/polygonal/ds/statuses/{sha}",
			"subscribers_url" : "https://api.github.com/repos/polygonal/ds/subscribers",
			"subscription_url" : "https://api.github.com/repos/polygonal/ds/subscription",
			"svn_url" : "https://github.com/polygonal/ds",
			"tags_url" : "https://api.github.com/repos/polygonal/ds/tags",
			"teams_url" : "https://api.github.com/repos/polygonal/ds/teams",
			"trees_url" : "https://api.github.com/repos/polygonal/ds/git/trees{/sha}",
			"updated_at" : "2017-05-31T04:32:01Z",
			"url" : "https://api.github.com/repos/polygonal/ds",
			"watchers" : 252 ,
			"watchers_count" : 252
		}]
	};

	const repoTable = shallow(
		<Component type={repoProps.type} data={repoProps.data} />
	);

	expect(repoTable.instance().props.type).toBe(repoProps.type);
	expect(repoTable.instance().props.data).toBe(repoProps.data);
});