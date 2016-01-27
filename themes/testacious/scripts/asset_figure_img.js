'use strict';

/**
 * Asset image tag
 *
 * Syntax:
 *   {% asset_figure_img slug [title]%}
 */

hexo.extend.tag.register("asset_figure_img", function assetImgTag(args) {
  var ctx = hexo.post.context;
  var PostAsset = ctx.model('PostAsset');

  var slug = args.shift();
  if (!slug) return;

  var asset = PostAsset.findOne({post: this._id, slug: slug});
  if (!asset) return;

  // if title is not assigned, set it ''
  var title = args.length ? args.join(' ') : '';
  // alt always exist
  var alt = title ? title : asset.slug;

  return '<figure><img src="' + ctx.config.root + asset.path + '" alt="' + alt + '" title="' + title + '"></figure>';
});
