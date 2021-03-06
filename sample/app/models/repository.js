import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    archive_url: attr(),
    archived: attr(),
    assignees_url:  attr(),
    blobs_url:  attr(),
    branches_url:  attr(),
    clone_url:  attr(),
    collaborators_url:  attr(),
    comments_url:  attr(),
    commits_url:  attr(),
    compare_url:  attr(),
    contents_url:  attr(),
    contributors_url: attr(),
    created_at: attr(),
    default_branch: attr(),
    deployments_url: attr(),
    description: attr(),
    disabled: attr(),
    downloads_url: attr(),
    events_url: attr(),
    fork: attr(),
    forks: attr(),
    forks_count: attr(),
    forks_url: attr(),
    full_name: attr(),
    git_url: attr(),
    html_url: attr(),
    id: attr(),
    name: attr(),
    node_id: attr(),
    owner: attr(),
    permissions: attr(),
    private: attr(),
    pulls_url: attr(),
    releases_url: attr(),
    ssh_url: attr(),
    updated_at: attr(),
    url: attr()
});
